import { i18n } from '@/main'
const $t = (key) => { return i18n.global.t(key) }

function validateAge(rule, value) {
    if (!value) {
        return new Error($t('test_lang'));
    } else if (!/^\d*$/.test(value)) {
        return new Error("Age should be an integer");
    } else if (Number(value) < 18) {
        return new Error("Age should be above 18");
    } else if (Number(value) > 150) {
        return new Error("E chi sei, Matusalemme?");
    }

    return true;
}


function validateEmailBackEnd(rule, value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (value == "q@q.com") {
                reject(Error("Email already exists"));
            } else {
                resolve();
            }
        }, 2000)
    })
}



export {
    validateAge,
    validateEmailBackEnd
};