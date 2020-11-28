//Pharmacy Admin Modal

import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap'
import AddEditForm from '../Forms/pharmacyAdminAddEditForm'

class ModalForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false
    }
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }))
  }

  render() {
      const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>

      const label = this.props.buttonLabel

      let button = ''
      let title = ''
      if(label === 'Edit'){
        button = <Button
                  color="warning"
                  size="sm"
                  onClick={this.toggle}
                  style={{float: "left", marginRight:"10px"}}>{label}
                </Button>
        title = 'Edit Pharmacy Admin Data'
      } else {
        button = <Button
                  color="success"
                  onClick={this.toggle}
                  style={{float: "left", marginRight:"10px"}}>{label}
                </Button>
        title = 'Add Pharmacy Admin'
      }

      return (
        <div>
          {button}
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle} close={closeBtn}>{title}</ModalHeader>
            <ModalBody>
              <AddEditForm
                addPharmacyAdmin={this.props.addPharmacyAdmin}
                updatePharmacy={this.props.updatePharmacyAdmin}
                toggle={this.toggle}
                item={this.props.item} />
            </ModalBody>
          </Modal>
        </div>
      )
    }
  }
  
  export default ModalForm