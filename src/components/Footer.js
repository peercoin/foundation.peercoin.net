import React from 'react'
import preval from 'preval.macro'

export default function Footer() {
    return (
        <div className='footer'>
            <div className="content__container">
                <div className="footer__heading icon icon--footer">Organizational notes</div>
                <div>
                    <p>Stichting Peercoin Foundation<br />President Kennedylaan 19<br />2517JK The Hague<br />The Netherlands<br /> RSIN: 858715958</p>
                    <p><a href="mailto:foundation@peercoin.net">foundation@peercoin.net</a></p>
                </div>
                <div className="mt-3">
                    <p className='bold'>
                        Last updated: {preval`module.exports = new Date().toLocaleString('en-US', {month: 'long', day: 'numeric', year: 'numeric'});`}.<br /><br />
                        © {new Date().toLocaleString('en-US', { 'year': 'numeric' })} Stichting Peercoin Foundation<br /><br />
                        All content licensed under GNU Affero General Public License Version 3, unless otherwise noted
                    </p>
                </div>
            </div>
        </div >
    )
}
