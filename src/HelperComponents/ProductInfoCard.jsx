import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";

export default class ProductInfoCard extends Component {
  reduceText = (text, count) => {
    var reducedText = text.substring(0, count);
    return reducedText;
  };
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      modalData: {
        title: "",
        price: 0,
        description: "",
        onSale: false,
      },
      editedData: {
        title: "",
        price: 0,
        description: "",
        onSale: false,
      },
      formErrors: {},
    };
  }

  // Function to open the modal and set data
  openModal = (data) => {
    this.setState({
      showModal: true,
      modalData: data,
      editedData: { ...data },
      formErrors: {},
    });
  };

  handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;

    this.setState((prevState) => ({
      editedData: {
        ...prevState.editedData,
        [name]: fieldValue,
      },
      formErrors: {
        ...prevState.formErrors,
        [name]: this.validateField(name, fieldValue),
      },
    }));
  };

  validateField = (name, value) => {
    let error = "";
    if (name === "title" && value.trim() === "") {
      error = "Title is required";
    }
    if (name === "price" && (value < 0 || isNaN(value))) {
      error = "Price must be a positive number";
    }
    if (name === "price" && (value < 10 || isNaN(value))) {
      error = "Price must be bigger than 10";
    }
    if (name === "description" && value.trim() === "") {
      error = "Description is required";
    }
    return error;
  };

  // Function to close the modal
  closeModal = () => {
    this.setState({ showModal: false });
  };
  saveChanges = (id) => {
    const { editedData } = this.state;
    const formErrors = {
      title: this.validateField("title", editedData.title),
      price: this.validateField("price", editedData.price),
      description: this.validateField("description", editedData.description),
    };

    if (!formErrors.title && !formErrors.price && !formErrors.description) {
      this.props.UpdateProduct(id, editedData);
      this.setState({
        modalData: { ...editedData },
        showModal: false,
      });
    } else {
      this.setState({ formErrors });
    }
  };

  render() {
    let { id, title, price, description, image, onSale } = this.props.product;
    const { showModal, modalData, formErrors, editedData } = this.state;
    return (
      <>
        <div className="col-md-3">
          <div
            className="card my-2 position-relative"
            style={{
              width: "100%",
            }}
          >
            {onSale ? (
              <label className="col-form-label m-1 custom_onSale">
                <q className="bg-dark text-white btn btn-sm">
                  <b>On Sale</b>
                </q>
              </label>
            ) : null}
            <img src={image} style={{
              width: "100px",
              height: "100px",
            }} className="  m-auto p-2" alt={title} />
            <div className="card-body">
              <h6 className="card-title">{title.substring(0, 7)}</h6>
              <p className="card-text">{this.reduceText(description, 40)}</p>
              <label className="col-form-label">
                <q className="bg-primary text-white btn btn-sm">{price}$</q>
              </label>
            </div>
            <div className="d-flex justify-content-between  ">
              <button
                className="btn btn-sm btn-danger w-25"
                onClick={() => {
                  this.props.DeleteProduct(id);
                }}
              >
                <i className="fa fa-trash"></i>
              </button>

              <Button
                className="w-25"
                variant="warning"
                onClick={() => {
                  this.openModal(this.props.product);
                }}
              >
                <i className="fa fa-pencil-square text-dark"></i>
              </Button>

              {showModal && (
                <Modal show={showModal} onHide={this.closeModal}>
                  <Modal.Header closeButton>
                    <Modal.Title>
                      Update-{modalData.title.substring(0, 7)}
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <div className="row col-md-12">
                      <div className="col-md-12">
                        <label className="form-label">Name:</label>
                        <input
                          className="input-group"
                          name="title"
                          value={editedData.title}
                          onChange={this.handleInputChange}
                        />
                        {formErrors.title && (
                          <p className="text-danger">{formErrors.title}</p>
                        )}
                      </div>
                      <div className="col-md-12">
                        <label className="form-label">price:</label>
                        <input
                          className="input-group"
                          name="price"
                          type="number"
                          min="1"
                          value={editedData.price}
                          onChange={this.handleInputChange}
                        />
                        {formErrors.price && (
                          <p className="text-danger">{formErrors.price}</p>
                        )}
                      </div>
                      <div className="col-md-12">
                        <label className="form-label">description:</label>
                        <textarea
                          className="input-group"
                          name="description"
                          value={editedData.description}
                          onChange={this.handleInputChange}
                        />
                        {formErrors.description && (
                          <p className="text-danger">
                            {formErrors.description}
                          </p>
                        )}
                      </div>
                      <div className="col-md-12">
                        <label className="form-label">onSale:</label>
                        <input
                          type="checkbox"
                          className="form-check"
                          name="onSale"
                          checked={editedData.onSale}
                          onChange={this.handleInputChange}
                        />
                      </div>
                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      variant="success"
                      onClick={() => {
                        this.saveChanges(modalData.id);
                      }}
                    >
                      Save
                    </Button>
                    <Button variant="secondary" onClick={this.closeModal}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              )}
            </div>
            {/* <button className="btn text-center btn-success btn-sm w-25 m-auto mb-2">
              <i className="fa fa-plus-circle "></i>
            </button> */}
          </div>
        </div>
      </>
    );
  }
}

/**
 * 
 * <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
 * 
 */
