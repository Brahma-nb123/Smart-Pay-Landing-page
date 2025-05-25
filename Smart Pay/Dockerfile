# Use the official Nginx image from Docker Hub
FROM nginx:latest

# Copy HTML, CSS, JS, and other static files
COPY *.html /usr/share/nginx/html/
COPY *.css /usr/share/nginx/html/
COPY *.js /usr/share/nginx/html/

# Copy the video file to the correct directory
#COPY video/mixkit-green-leaf-of-a-tree-wet-from-the-rain-18311-medium.mp4 /usr/share/nginx/html/video/

# (Optional) Create a volume directory if you need it
# Note: WORKDIR should be the correct spelling
#WORKDIR /active/Smart-Pay-Landing-page/Smart Pay

# Expose port 80
#EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
