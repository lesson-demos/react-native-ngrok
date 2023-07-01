#!/bin/sh

API_URL="$(curl -s http://127.0.0.1:4040/api/tunnels | jq -r '.tunnels[0].public_url')" npx expo start