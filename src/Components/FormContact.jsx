import { PrimaryButton } from "./Button";

const FormContact = () => {
  return (
    <form className="mt-14 reveal-up">
        <div className=" max-w-xl w-full mx-auto">
          <div className="flex flex-col sm:flex-row items-center gap-2 mb-4">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Name</span>
              </div>
              <input
                type="text"
                placeholder="John Doe"
                className="input input-bordered w-full max-w-xs"
                required
              />
            </label>

            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Email</span>
              </div>
              <input
                type="text"
                placeholder="john@gmail.comm"
                className="input input-bordered w-full max-w-xs"
                required
              />
            </label>
          </div>

          <label className="form-control w-full">
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