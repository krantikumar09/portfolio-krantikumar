import { PrimaryButton } from "./Button";

const FormContact = () => {
  return (
    <form className="mt-14">
        <div className=" max-w-xl w-full mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2">
            <label className="form-control w-full reveal-up">
              <div className="label">
                <span className="label-text">Name</span>
              </div>
              <input
                type="text"
                placeholder="John Doe"
                className="input input-bordered w-full"
                required
              />
            </label>

            <label className="form-control w-full reveal-up">
              <div className="label">
                <span className="label-text">Email</span>
              </div>
              <input
                type="text"
                placeholder="john@gmail.comm"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>

          <label className="form-control w-full  reveal-up">
            <div className="label">
              <span className="label-text">Message</span>
            </div>
            <textarea
              className="textarea textarea-bordered w-full"
              placeholder="Message"
              rows={6}
              required
            ></textarea>
          </label>

          <PrimaryButton label="Submit" classes="w-full mt-4" />
        </div>
      </form>
  )
}

export default FormContact