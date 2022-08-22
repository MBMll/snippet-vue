<template>
    <n-data-table
        v-resize-width="{ barWidth: 10 }"
        :columns="columns"
        :data="tableData"
        bordered
        :single-line="false"
        scrollable-x
    ></n-data-table>
</template>
<script lang="ts" setup>
    const columns = [
        { title: 'col1', key: 'col1', width: 150, minWidth: 300 },
        { title: 'col2', key: 'col2', width: 150 }
    ]
    const tableData = [
        { col1: '32no', col2: '3nr' },
        { col1: 'noadf;b', col2: '230' }
    ]
    const vResizeWidth = {
        mounted: (el, binding, vnode, prevVnode) => {
            // console.log(el, binding, vnode, prevVnode)
            // console.log(el.classList, el.className)
            if (
                el.className !== 'n-data-table n-data-table--bordered' &&
                el.classList.contains('n-data-table') &&
                el.classList.contains('n-data-table--bordered')
            ) {
                return
            }
            const colGroup =
                el?.childNodes?.[0]?.childNodes?.[0]?.childNodes?.[2]?.childNodes?.[0]
                    ?.childNodes?.[1]?.childNodes?.[0]?.childNodes?.[0].childNodes
            const ths =
                el?.childNodes?.[0]?.childNodes?.[0]?.childNodes?.[2]?.childNodes?.[0]
                    ?.childNodes?.[1]?.childNodes?.[0]?.childNodes?.[1]?.childNodes?.[0].childNodes
            // console.log(ths)
            ths.forEach((th, i) => {
                // console.log(th, th.style, i)
                th.onmousedown = function (event: MouseEvent) {
                    // console.log(arguments, this)
                    if (event.offsetX > this.offsetWidth - 10) {
                        this.isResizing = true
                        this.oldX = event.x
                        this.oldWidth = Number.parseInt(colGroup[i].style.width)
                    }
                }
                th.onmouseup = function (event: MouseEvent) {
                    // console.log(arguments, this)
                    this.isResizing = false
                    this.style.cursor = 'default'
                }
                th.onmousemove = function (event: MouseEvent) {
                    // console.log(arguments, this)
                    // console.log(event.offsetX, this.offsetWidth)
                    if (event.offsetX > this.offsetWidth - binding.value.barWidth) {
                        this.style.cursor = 'col-resize'
                    } else {
                        this.style.cursor = 'default'
                    }
                    if (this.isResizing) {
                        const minWidth = Number.parseInt(colGroup[i].style.minWidth) || 0
                        const maxWidth = Number.parseInt(colGroup[i].style.maxWidth) || Infinity
                        this.style.cursor = 'default'
                        const width = this.oldWidth + (event.x - this.oldX)
                        let _width = minWidth
                        if (width >= minWidth && width <= maxWidth) {
                            _width = width
                        }
                        console.log(minWidth, maxWidth, width, event.x, this.oldX, this.oldWidth)
                        colGroup[i].style.width = _width + 'px'
                        this.style.cursor = 'col-resize'
                    }
                }
            })
        }
    }
</script>
