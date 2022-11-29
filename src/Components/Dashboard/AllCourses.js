import React from 'react'
import DHeader from './DHeader'
export default function AllCourses() {
  return (

    <>
    <DHeader />
        <main id="main" className="main">

            <div className="pagetitle">
            <h1>Alerts</h1>
            <nav>
                <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/dashboard">Home</a></li>
                <li className="breadcrumb-item">Course</li>
                <li className="breadcrumb-item active">All Course</li>
                </ol>
            </nav>
            </div>

            <section className="section">
            <div className="row">
                <div className="col-lg-6">

                <div className="card">
                    <div className="card-body">

                    <h5 className="card-title">Default</h5>

                    <div className="alert alert-primary alert-dismissible fade show" role="alert">
                        A simple primary alert—check it out!
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>

                    <div className="alert alert-secondary alert-dismissible fade show" role="alert">
                        A simple secondary alert—check it out!
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>

                    <div className="alert alert-success alert-dismissible fade show" role="alert">
                        A simple success alert—check it out!
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>

                    <div className="alert alert-danger alert-dismissible fade show" role="alert">
                        A simple danger alert—check it out!
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>

                    <div className="alert alert-warning alert-dismissible fade show" role="alert">
                        A simple warning alert—check it out!
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>

                    <div className="alert alert-info alert-dismissible fade show" role="alert">
                        A simple info alert—check it out!
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>

                    <div className="alert alert-light border-light alert-dismissible fade show" role="alert">
                        A simple light alert—check it out!
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>

                    <div className="alert alert-dark alert-dismissible fade show" role="alert">
                        A simple dark alert—check it out!
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>

                    </div>
                </div>

                </div>

                <div className="col-lg-6">
                <div className="card">
                    <div className="card-body">
                    <h5 className="card-title">With Heading &amp Separator</h5>

                    <div className="alert alert-primary alert-dismissible fade show" role="alert">
                        <h4 className="alert-heading">Primary Heading</h4>
                        <p>Et suscipit deserunt earum itaque dignissimos recusandae dolorem qui. Molestiae rerum perferendis laborum. Occaecati illo at laboriosam rem molestiae sint.</p>
                        <hr />
                        <p className="mb-0">Temporibus quis et qui aspernatur laboriosam sit eveniet qui sunt.</p>
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>

                    <div className="alert alert-secondary alert-dismissible fade show" role="alert">
                        <h4 className="alert-heading">Secondary Heading</h4>
                        <p>Et suscipit deserunt earum itaque dignissimos recusandae dolorem qui. Molestiae rerum perferendis laborum. Occaecati illo at laboriosam rem molestiae sint.</p>
                        <hr />
                        <p className="mb-0">Temporibus quis et qui aspernatur laboriosam sit eveniet qui sunt.</p>
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>

                    <div className="alert alert-success alert-dismissible fade show" role="alert">
                        <h4 className="alert-heading">Success Heading</h4>
                        <p>Et suscipit deserunt earum itaque dignissimos recusandae dolorem qui. Molestiae rerum perferendis laborum. Occaecati illo at laboriosam rem molestiae sint.</p>
                        <hr />
                        <p className="mb-0">Temporibus quis et qui aspernatur laboriosam sit eveniet qui sunt.</p>
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>

                    <div className="alert alert-danger alert-dismissible fade show" role="alert">
                        <h4 className="alert-heading">Danger Heading</h4>
                        <p>Et suscipit deserunt earum itaque dignissimos recusandae dolorem qui. Molestiae rerum perferendis laborum. Occaecati illo at laboriosam rem molestiae sint.</p>
                        <hr />
                        <p className="mb-0">Temporibus quis et qui aspernatur laboriosam sit eveniet qui sunt.</p>
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>

                    <div className="alert alert-warning  alert-dismissible fade show" role="alert">
                        <h4 className="alert-heading">Warning Heading</h4>
                        <p>Et suscipit deserunt earum itaque dignissimos recusandae dolorem qui. Molestiae rerum perferendis laborum. Occaecati illo at laboriosam rem molestiae sint.</p>
                        <hr />
                        <p className="mb-0">Temporibus quis et qui aspernatur laboriosam sit eveniet qui sunt.</p>
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>

                    <div className="alert alert-info  alert-dismissible fade show" role="alert">
                        <h4 className="alert-heading">Info Heading</h4>
                        <p>Et suscipit deserunt earum itaque dignissimos recusandae dolorem qui. Molestiae rerum perferendis laborum. Occaecati illo at laboriosam rem molestiae sint.</p>
                        <hr />
                        <p className="mb-0">Temporibus quis et qui aspernatur laboriosam sit eveniet qui sunt.</p>
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>

                    <div className="alert alert-light border-light alert-dismissible fade show" role="alert">
                        <h4 className="alert-heading">Lignt Heading</h4>
                        <p>Et suscipit deserunt earum itaque dignissimos recusandae dolorem qui. Molestiae rerum perferendis laborum. Occaecati illo at laboriosam rem molestiae sint.</p>
                        <hr />
                        <p className="mb-0">Temporibus quis et qui aspernatur laboriosam sit eveniet qui sunt.</p>
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>

                    <div className="alert alert-dark  alert-dismissible fade show" role="alert">
                        <h4 className="alert-heading">Dark Heading</h4>
                        <p>Et suscipit deserunt earum itaque dignissimos recusandae dolorem qui. Molestiae rerum perferendis laborum. Occaecati illo at laboriosam rem molestiae sint.</p>
                        <hr />
                        <p className="mb-0">Temporibus quis et qui aspernatur laboriosam sit eveniet qui sunt.</p>
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>

                    </div>
                </div>
                </div>
            </div>
            </section>

        </main>
    </>
  )
}
