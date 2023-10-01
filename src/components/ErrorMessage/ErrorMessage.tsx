import React from 'react'
import s from './style/ErrorMessage.module.scss'
import Link from 'next/link'

const ErrorMessage = () => {
  return (
    <div className={s.errorContainer}>
      Возникла ошибка во время запроса на сервер, проверьте правильность API ключа, если это
      DEMO_KEY то возможно у вас закончилось количество запросов (30 в день).
      <br />
      Если у вас нет своего ключа вы можете получить его на сайте -
      <Link href={'https://api.nasa.gov/'} className={s.link}>
        NASA open APIs
      </Link>
    </div>
  )
}

export default ErrorMessage
