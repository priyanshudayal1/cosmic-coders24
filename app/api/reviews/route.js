import { NextResponse } from "next/server";

export async function GET() {
    const apiKey = process.env.GOOGLE_PLACES_API_KEY;
    const placeId = process.env.GOOGLE_PLACE_ID;

    if (!apiKey || !placeId) {
        return NextResponse.json(
            { error: "Google Places API credentials are not set." },
            { status: 500 }
        );
    }

    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.status !== "OK") {
            console.error("Google Places API error:", data.status, data.error_message);
            return NextResponse.json(
                { error: `Failed to fetch reviews: ${data.status}`, details: data.error_message },
                { status: 500 }
            );
        }

        const reviews = data.result.reviews || [];

        // Format reviews for the frontend
        const formattedReviews = reviews.map((review, index) => {
            const text = review.text.toLowerCase();
            const isBusinessOwner = text.includes("business") || text.includes("company") || text.includes("services");

            return {
                id: index,
                name: review.author_name,
                role: isBusinessOwner ? "Business Owner" : "Client",
                text: review.text,
                image: review.profile_photo_url,
                rating: review.rating,
                relative_time_description: review.relative_time_description,
            };
        });

        return NextResponse.json({ reviews: formattedReviews });
    } catch (error) {
        console.error("Error fetching reviews:", error);
        return NextResponse.json(
            { error: "An error occurred while fetching reviews." },
            { status: 500 }
        );
    }
}
