import React from 'react'

export default function AddCourse() {
  return (
    <>
    
    <main id="main" class="main">

        <div class="pagetitle">
        <h1>Form Elements</h1>
        <nav>
            <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="/">Home</a></li>
            <li class="breadcrumb-item">Course</li>
            <li class="breadcrumb-item active">AddCourse</li>
            </ol>
        </nav>
        </div>

        <section class="section">
        <div class="row">
            <div class="col-lg-6">

            <div class="card">
                <div class="card-body">
                <h5 class="card-title">General Form Elements</h5>

                <form>
                    <div class="row mb-3">
                    <label for="inputText" class="col-sm-2 col-form-label">Text</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" />
                    </div>
                    </div>
                    <div class="row mb-3">
                    <label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-10">
                        <input type="email" class="form-control" />
                    </div>
                    </div>
                    <div class="row mb-3">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                    <div class="col-sm-10">
                        <input type="password" class="form-control" />
                    </div>
                    </div>
                    <div class="row mb-3">
                    <label for="inputNumber" class="col-sm-2 col-form-label">Number</label>
                    <div class="col-sm-10">
                        <input type="number" class="form-control" />
                    </div>
                    </div>
                    <div class="row mb-3">
                    <label for="inputDate" class="col-sm-2 col-form-label">Date</label>
                    <div class="col-sm-10">
                        <input type="date" class="form-control" />
                    </div>
                    </div>
                    <div class="row mb-3">
                    <label for="inputTime" class="col-sm-2 col-form-label">Time</label>
                    <div class="col-sm-10">
                        <input type="time" class="form-control" />
                    </div>
                    </div>
                    <div class="row mb-3">
                    <label for="inputPassword" class="col-sm-2 col-form-label">description</label>
                    <div class="col-sm-10">
                        <textarea class="form-control" style="height: 100px"></textarea>
                    </div>
                    </div>
                    <div class="row mb-3">
                    <legend class="col-form-label col-sm-2 pt-0">Checkboxes</legend>
                    <div class="col-sm-10">

                        <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="gridCheck1" />
                        <label class="form-check-label" for="gridCheck1">
                            Example checkbox
                        </label>
                        </div>

                        <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="gridCheck2" checked>
                        <label class="form-check-label" for="gridCheck2">
                            Example checkbox 2
                        </label>
                        </div>

                    </div>
                    </div>

                    

                    <div class="row mb-3">
                    <label class="col-sm-2 col-form-label">Submit Button</label>
                    <div class="col-sm-10">
                        <button type="submit" class="btn btn-primary">Submit Form</button>
                    </div>
                    </div>

                </form>

                </div>
            </div>

            </div>
        </div>
        </section>

</main>
    </>   
     )
}
