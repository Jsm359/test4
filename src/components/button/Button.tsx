import React from 'react'
import classnames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classnames.bind(styles)

export const Button = () => {
  return (
    <div className={cx('btn')}>Button</div>
  )
}
