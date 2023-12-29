
import { useState } from "react";
import styles from "./index.module.css"; 

const BikeForm = ({ onSave }) => {
    const [formData, setFormData] = useState({
        name: "",
        type: "",
        color: "",
        wheelSize: "",
        price: "",
        id: "",
        description: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
        handleClear();
    };

    const handleClear = () => {
        setFormData({
            name: "",
            type: "",
            color: "",
            wheelSize: "",
            price: "",
            id: "",
            description: "",
        });
    };

    return (
        <form className={styles.formContainer} onSubmit={handleSubmit}>
            <div className={styles.row}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    minLength={5}
                />
                <input
                    type="text"
                    name="type"
                    placeholder="Type"
                    value={formData.type}
                    onChange={handleChange}
                    required
                    minLength={5}
                />
            </div>
            <div className={styles.row}>
                <input
                    type="text"
                    name="color"
                    placeholder="Color"
                    value={formData.color}
                    onChange={handleChange}
                    required
                    minLength={5}
                />
                <input
                    type="number"
                    name="wheelSize"
                    placeholder="Wheel Size"
                    value={formData.wheelSize}
                    onChange={handleChange}
                    required
                    min={1}
                />
            </div>
            <div className={styles.row}>
                <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    value={formData.price}
                    onChange={handleChange}
                    required
                    min={1}
                />
                <input
                    type="text"
                    name="id"
                    placeholder="ID"
                    value={formData.id}
                    onChange={handleChange}
                    required
                    minLength={5}
                />
            </div>
            <div className={styles.row}>
                <textarea
                    name="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    minLength={5}

                />
            </div>
            <div className={styles.row}>
                <button type="submit">Save</button>
                <button type="reset" onClick={handleClear}>Clear</button>
            </div>
        </form>
    );
};

export default BikeForm;
