
export const getElementHeight = (ele) => {
    try{
        const element = document.querySelector(ele)
        return element ? element.clientHeight : "auto"
    }catch (err) {
        return "auto"
    }
}

export const getElementWidth = (ele) => {
    try{
        const element = document.querySelector(ele)
        return element ? element.clientWidth : "auto"
    }catch (err) {
        return "auto"
    }
}

export const convertToCurrency = (value) => {

    // Nine Zeroes for Billions
    return Math.abs(Number(value)) >= 1.0e+9

    ? (Math.abs(Number(value)) / 1.0e+9).toFixed(1) + "B"
    // Six Zeroes for Millions 
    : Math.abs(Number(value)) >= 1.0e+6

    ? (Math.abs(Number(value)) / 1.0e+6).toFixed(1) + "M"
    // Three Zeroes for Thousands
    : Math.abs(Number(value)) >= 1.0e+3

    ? (Math.abs(Number(value)) / 1.0e+3).toFixed(1) + "K"

    : Math.abs(Number(value));

}
