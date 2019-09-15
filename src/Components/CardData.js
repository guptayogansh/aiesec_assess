import React, { useState } from "react";
import { Card, Modal, Button } from "react-bootstrap";

const CardData = ({ cardArrayData, newMethod }) => {
    const [show, setShow] = useState(false);
    const [currentItem, setCurrentItem] = useState(null);
    const [location, setLocation] = useState("");
    const [title, setTitle] = useState("");

    const handleUpdate = () => {
        newMethod(currentItem, location, title);
        setCurrentItem(null);
        setShow(false);
    };
    const handleClose = () => setShow(false);

    const handleLocation = event => {
        setLocation(event.target.value);
        console.log("in location");
    };

    const handleTitle = event => {
        setTitle(event.target.value);
        console.log("in title");
    };
    const handleShow = index => {
        console.log(index);
        setCurrentItem(index);
        setShow(true);
    };

    return (
        <div>
            {cardArrayData.map((cardData, index) => (
                <div key={index}>
                    <Card
                        border="info"
                        style={{ width: "23rem" }}
                        onClick={handleShow.bind(this, index)}
                    >
                        <Card.Img
                            variant="top"
                            src={cardData.profile_photo_urls.original}
                        />
                        <Card.Body>
                            <Card.Title>{cardData.title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                                {cardData.location} . {cardData.earliest_start_date} .{" "}
                                {cardData.duration + " weeks"}
                            </Card.Subtitle>
                            <br />
                            <br />
                            <Card.Text> {cardData.branch.organisation.name}</Card.Text>
                        </Card.Body>
                    </Card>
                    <Modal show={show} onHide={handleClose} animation={false}>
                        <Modal.Header closeButton>
                            <Modal.Title>Edit</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <label htmlFor="title" style={{ fontWeight: "bold" }}>
                                Title
                            </label>{" "}
                            <br />
                            <input
                                id="type"
                                type="text"
                                name="title"
                                onChange={handleTitle}
                            ></input>{" "}
                            <br /> <br />
                            <label htmlFor="location" style={{ fontWeight: "bold" }}>
                                Location
                            </label>{" "}
                            <br />
                            <input
                                id="location"
                                type="text"
                                name="location"
                                onChange={handleLocation}
                            ></input>{" "}
                            <br /> <br />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleUpdate}>
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            ))}
        </div>
    );
};

export default CardData;
