<template>
    <div class="ddnet-about--container" @click="message">
        <div>version:{{ ddnetPack.version }}</div>
        <div>language version: {{ languagePack.version }}</div>
    </div>
</template>

<script setup lang="ts">
import ddnetPack from "../../package.json";
import languagePack from "../i18n/language/zh_cn.json"
import GlobalMessage from '@/hook/messages/index'

function message() {
    GlobalMessage.text("hello world")
}
</script>

<style scoped lang="scss">
.ddnet-about--container {
    width: 100%;
    text-wrap: nowrap;
}
</style>@/hook/messages/hookMessages