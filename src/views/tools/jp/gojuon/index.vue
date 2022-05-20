<template>
    <n-space justify="space-between">
        <n-checkbox-group v-model:value="soundRef">
            <n-space>
                <n-checkbox
                    value="voiceless"
                    label="清音"
                    :disabled="soundRef.length === 1 && soundRef.includes('voiceless')"
                />
                <n-checkbox
                    value="voiced"
                    label="浊音/半浊音"
                    :disabled="soundRef.length === 1 && soundRef.includes('voiced')"
                />
                <n-checkbox
                    value="difficult"
                    label="拗音"
                    :disabled="soundRef.length === 1 && soundRef.includes('difficult')"
                />
            </n-space>
        </n-checkbox-group>
        <n-radio-group v-model:value="typeRef">
            <n-space>
                <n-radio key="hiragana" value="hiragana">平假名</n-radio>
                <n-radio key="katakana" value="katakana">片假名</n-radio>
                <n-radio key="r" value="r">音标</n-radio>
            </n-space>
        </n-radio-group>
    </n-space>

    <div style="width: 100%; margin: auto; user-select: none">
        <n-space vertical>
            <span class="button-text" style="font-size: 192px; cursor: pointer" @click="next">{{
                prompt
            }}</span>
            <span class="button-text" style="font-size: 48px">&nbsp;{{ answerRef }}</span>
            <n-button
                style="display: inline-block; margin: 1em 0 auto; width: 100%; height: 1.6em"
                @click="next"
                >next</n-button
            >
        </n-space>
    </div>
</template>

<script lang="ts" setup>
    import { sounds } from './data'

    const soundRef = ref([
        'voiceless'
        // 'voiced', 'difficult'
    ])
    const typeRef = ref('hiragana')
    const selectedRef = ref(0)
    const answerRef = ref('')

    const data = computed(() => soundRef.value.map((s) => sounds[s]).flat())
    const prompt = computed(() => {
        if (typeRef.value === 'hiragana') {
            return data.value[selectedRef.value].h
        }
        if (typeRef.value === 'katakana') {
            return data.value[selectedRef.value].k
        }
        if (typeRef.value === 'r') {
            return data.value[selectedRef.value].r
        }
    })
    watch(data, () => {
        selectedRef.value = Math.floor(Math.random() * data.value.length)
    })
    const next = () => {
        if (answerRef.value) {
            selectedRef.value = Math.floor(Math.random() * data.value.length)
            answerRef.value = ''
        } else {
            const selected = data.value[selectedRef.value]
            if (typeRef.value === 'hiragana') {
                answerRef.value = selected.k + ' ' + selected.r
            }
            if (typeRef.value === 'katakana') {
                answerRef.value = selected.h + ' ' + selected.r
            }
            if (typeRef.value === 'r') {
                answerRef.value = selected.h + ' ' + selected.k
            }
        }
    }
</script>

<style lang="scss" scoped>
    .button-text {
        display: inline-block;
        width: 100%;
        text-align: center;
    }
    @media (max-width: 480px) {
        .button-text {
            height: 2em;
            line-height: 2em;
        }
    }
</style>
