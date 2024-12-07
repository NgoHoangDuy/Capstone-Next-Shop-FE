import { useTranslation } from "react-i18next"

export const LOCAL_PRODUCT_CART = "productCart"

export const OBJECT_STATUS_PRODUCT = () => {
    const {t} = useTranslation()

    return {
        "0": {
            label: t("Private"),
            value: "0"
        },
        "1": {
            label: t("Public"),
            value: "1"
        }
    }
}

export const FILTER_REVIEW_PRODUCT = () => {
    const {t} = useTranslation()

    return [
        {
            label: t("4_and_up"),
            value: "4"
        },
        {
            label: t("3_and_up"),
            value: "3"
        },
        {
            label: t("2_and_up"),
            value: "2"
        },
        {
            label: t("1_and_up"),
            value: "1"
        },
    ]
}
