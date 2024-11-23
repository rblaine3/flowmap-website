#!/bin/bash

# Create images directory if it doesn't exist
mkdir -p images

# Download workflow mapping image
curl "https://images.unsplash.com/photo-1542626991-cbc4e32524cc" -o images/workflow-mapping.jpg

# Download collaboration image
curl "https://images.unsplash.com/photo-1600880292203-757bb62b4baf" -o images/collaboration.jpg

# Download ROI dashboard image
curl "https://images.unsplash.com/photo-1551288049-bebda4e38f71" -o images/roi-dashboard.jpg

# Download onboarding image
curl "https://images.unsplash.com/photo-1522071820081-009f0129c71c" -o images/onboarding.jpg

echo "Images downloaded successfully!"
