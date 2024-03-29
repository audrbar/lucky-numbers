import List from './List';
import Create from './Create';
import ModalDelete from './ModalDelete';
import ModalAdd from './ModalAdd';
import ModalRem from './/ModalRem';

function LuckyNumbers() {
  return (
    <>
    <div className="container">
        <div className="row">
          <div className="col-5">
            <Create />
          </div>
          <div className="col-7">
            <List />
          </div>
        </div>
    </div>
      <ModalDelete />
      <ModalAdd />
      <ModalRem />
    </>
  )
}

export default LuckyNumbers;