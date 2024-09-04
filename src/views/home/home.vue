<template>
    <div class="home">
        <div id="canvas-container">
            <canvas ref="myCanvas" width="500" height="500"></canvas>
        </div>
        <input type="file" @change="handleImageUpload" accept="image/*">
        <input type="text" v-model="textInput" placeholder="输入文字">
        <button @click="drawText">加入文字</button>
        <button @click="downloadImage">下載</button>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
const textInput = ref('');
const canvas = ref(null);
const ctx = ref(null);
const img = new Image();

const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
        img.src = e.target.result;
        img.onload = () => {
            if (ctx.value) {
                ctx.value.clearRect(0, 0, canvas.value.width, canvas.value.height);
                ctx.value.drawImage(img, 0, 0, canvas.value.width, canvas.value.height);
            }
        };
    };

    if (file) {
        reader.readAsDataURL(file);
    }
};

const drawText = () => {
    if (textInput.value && ctx.value) {
        ctx.value.font = '30px Arial';
        ctx.value.fillStyle = 'white';
        ctx.value.textAlign = 'center';
        ctx.value.textBaseline = 'middle';
        ctx.value.fillText(textInput.value, canvas.value.width / 2, canvas.value.height / 2);
    }
};

const downloadImage = () => {
    if (canvas.value) {
        const link = document.createElement('a');
        link.download = 'canvas-image.png';
        link.href = canvas.value.toDataURL();
        link.click();
    }
};

onMounted(() => {
    canvas.value = document.querySelector('canvas');
    ctx.value = canvas.value.getContext('2d');
});
</script>
<style lang="scss" scoped>
.home {
    height: 100vh;
}
#canvas-container {
    position: relative;
    display: inline-block;
}
#myCanvas {
    border: 1px solid black;
}
#downloadButton {
    margin-top: 10px;
}
</style>