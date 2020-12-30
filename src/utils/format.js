export const forMatPlayCount = (count) => {
    if (count < 10000) {
        return count
    }
    if (count >= 100000000) {
        count = Math.round(count / 100000000) + '亿'
    } else {
        count = Math.round(count / 10000) + '万'
    }
    return count
}

//转换播放时间
export const forMatPlayTime = (second) => {
    const dayjs = require('dayjs')
    return dayjs(second).format('mm:ss')

}
