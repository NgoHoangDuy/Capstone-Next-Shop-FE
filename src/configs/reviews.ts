import { useTranslation } from 'react-i18next'

export const FILTER_REVIEW_CMS = () => {
  const { t } = useTranslation()

  return [
    {
      label: t('4_and_up'),
      value: '4'
    },
    {
      label: t('3_and_up'),
      value: '3'
    },
    {
      label: t('2_and_up'),
      value: '2'
    },
    {
      label: t('2_and_up'),
      value: '2'
    },
    {
      label: t('1_and_up'),
      value: '1'
    }
  ]
}
