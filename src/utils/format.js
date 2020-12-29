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