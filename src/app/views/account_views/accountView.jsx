import React from 'react'
import LinkCategoryAccount from '../../shared/components/account-component/LinkCategoryAccount'
import './AccountView.css'

export default function AccountView() {
    return (
        <div className='account-container'>
        <div className="account-title">
        <h2>Mon Compte </h2>
        </div>
            <LinkCategoryAccount />
            <LinkCategoryAccount />
            <LinkCategoryAccount />
        </div>
    )
}
