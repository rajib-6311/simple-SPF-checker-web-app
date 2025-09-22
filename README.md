Installation and Running the Application


1.Clone the repository:


git clone https://github.com/rajib-6311/simple-SPF-checker-web-app.git
cd simple-SPF-checker-web-app


2.Install client dependencies and run Client:



npm install
npm run dev



Assumptions & Limitations:


Uses a public DNS API (Cloudflare) → if it’s down or blocked, lookups will fail.


Needs internet connection to fetch DNS records.