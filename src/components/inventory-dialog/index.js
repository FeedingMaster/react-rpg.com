import React, { useState } from 'react';

import Backpack      from './backpack.png';
import BackpackItems from '../backpack-items';
import Dialog        from '../dialog';
import EquippedItems from '../equipped-items';
import ViewItem      from '../view-item';

import './styles.scss';

const InventoryDialog = (props) => {

  const [viewItem, setViewItem] = useState(null);

  function handleViewItem(item) {
    setViewItem(
      <ViewItem
        data={item}
        onClose={handleCloseItem} />
    );
  }

  function handleCloseItem() {
    setViewItem(null);
  }

  return(
    <Dialog>

      { viewItem }

      <div className='flex-row inventory-dialog-container'>
        <div className='flex-column inventory-dialog-child'
          style={{width: '40%'}}>
          <EquippedItems />
        </div>

        <div className='flex-column inventory-dialog-child'
          style={{width: '60%'}}>
          <div className='inventory-backpack' style={{backgroundImage: `url(${Backpack})`}}>
            <BackpackItems view_item={handleViewItem} />
          </div>
        </div>
      </div>
    </Dialog>
  );
}

export default InventoryDialog;
