import React from 'react'

export default function ContentBox() {
    return (
        <div className='content content__box'>
            <div className="content__container">
                <div className="content__box content__box--single">
                    <h2>About us</h2>
                    <p>
                        The Peercoin Foundation has been established with the simple mission of promoting and supporting the continued education, development, and overall progression of the Peercoin project.<br />
                        We seek to empower future Peercoin team members by providing the tools necessary to perpetuate Peercoin's long standing reputation for bringing world-first innovations to the Blockchain.
                    </p>
                    <p>
                        The Peercoin blockchain network and the Peercoin project in general is an open-source decentralized ledger, with no governing body.<br />
                        The Peercoin Foundation makes no claims over intellectual property related to the Peercoin project, unless explicitly stated otherwise.
                    </p>
                </div>
                <div className="content__box content__box--single">
                    <h2 className='icon icon--community'>Community Support</h2>
                    <p>
                        If you would like to get involved with Peercoin, or would simply like to support the team, there are a handful of options at your disposal.<br />
                        If you are interested in becoming a developer for Peercoin or Peercoin related projects such as PeerAssets, send us an email at foundation@peercoin.net.<br />
                        If you would like to donate PPC to the Peercoin Foundation to support the expansion of a project, simply send your PPC donation to the multisignature address below.
                    </p>
                    <p>
                        General Fund - <strong>PPC</strong> Donation Address:<a target="_blank" rel="noopener noreferrer" href="https://chainz.cryptoid.info/ppc/address.dws?p92W3t7YkKfQEPDb7cG9jQ6iMh7cpKLvwK.htm"> p92W3t7YkKfQEPDb7cG9jQ6iMh7cpKLvwK</a><br />
                        General Fund - <strong>BTC</strong> Donation Address:<a target="_blank" rel="noopener noreferrer" href="https://btc.cryptoid.info/btc/address.dws?376NhxVL1LFBFndHNx9k7hvwvUzq6RZiPT.htm"> 376NhxVL1LFBFndHNx9k7hvwvUzq6RZiPT</a><br />
                        Fiat Donations - <strong>USD/EUR</strong> by Credit/Debit/Wire:<a target="_blank" rel="noopener noreferrer" href="https://opencollective.com/peercoin"> opencollective.com/peercoin</a>
                    </p>
                </div>
                <div className="content__box content__box--single">
                    <h2 className='icon icon--reports'>Financial Reports</h2>
                    <p>
                        The Peercoin Foundation releases financial reports anually. You may download them here.
                    </p>
                    <p>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="/assets/reports/Stichting_Peercoin_Foundation_-_Jaarrekening_2018.pdf"
                        >
                            Financial Report 2018
                        </a>{" "}
                        <br />
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="/assets/reports/Stichting_Peercoin_Foundation_-_Jaarrekening_2019.pdf"
                        >
                            Financial Report 2019
                        </a>{" "}
                        <br />
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="/assets/reports/Stichting_Peercoin_Foundation_-_Jaarrekening_2020.pdf"
                        >
                            Financial Report 2020
                        </a>{" "}
                        <br />
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="/assets/reports/Stichting_Peercoin_Foundation_-_Jaarrekening_2021.pdf"
                        >
                            Financial Report 2021
                        </a>
                    </p>
                </div>
            </div>
        </div >
    )
}
