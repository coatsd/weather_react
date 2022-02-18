import { useState } from 'react';

function ZipForm(props) {
    let [zipCode, setZipCode] = useState('');
    const { onSubmit } = props;

    const submitZipCode = (event) => {
        event.preventDefault();
        onSubmit(zipCode);
        setZipCode('');
    }

    return (
        <div className="zip-form">
            <form id="zipform" onSubmit={submitZipCode}>
                <div className="flex-parent">
                    <label htmlFor="zipcode">Zip</label>
                    <input onInput={(e) => setZipCode(e.target.value)}
                        className="form-control" type="input"
                        id="zipcode" name="zipcode" required />
                </div>
            </form>
        </div> 
    );
}
export default ZipForm;