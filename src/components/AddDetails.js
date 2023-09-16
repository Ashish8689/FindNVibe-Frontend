import React from 'react';
import { Form, Field } from "react-final-form";

//Not ready need to work on it
function AddDetails() {
    return (
        <div>
        <Form
        onSubmit={()=>{}}
        initialValues={{
        }}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label>Location: </label>
              <Field
                name="location"
                component="input"
                type="text"
                placeholder="Location"
              />
            </div>
            <div>
              <label>Price: </label>
              <Field
                name="price"
                component="input"
                type="text"
                placeholder="Price"
              />
            </div>
            <div>
              <button type="submit" disabled={submitting || pristine}>
                Submit
              </button>
              <button
                type="button"
                onClick={form.reset}
                disabled={submitting || pristine}
              >
                Reset
              </button>
            </div>
          </form>
        )}
      />
        </div>
    )
}

export default AddDetails
