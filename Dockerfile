FROM node:18-alpine

WORKDIR /app

# คัดลอก package.json และไฟล์ที่เกี่ยวข้องกับ dependencies
COPY package*.json ./

# ติดตั้ง dependencies
RUN npm install

# คัดลอกโค้ดทั้งหมด
COPY . .

# สร้าง production build
RUN npm run build

# เปิดพอร์ต 3000 สำหรับ Nuxt.js
EXPOSE 3000

# รันโปรเจคในโหมด production
CMD ["npm", "run", "start"]
