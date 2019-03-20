import moment from 'moment';
import { SHIFT_LIST, TASK, PICKUP_REQUEST, RIDER, SCAN_HISTORY, OPERATION, DELIVERY_ORDERS } from '../constants/tableName';

export const generateFilter = ({ pageSize, currentPage, order, include, timezone, where }, tableName) => {
  let filter = {};
  if (!currentPage) currentPage = 1;
  filter['limit'] = pageSize || 20;
  filter['currentPage'] = currentPage;
  filter['offset'] = (currentPage - 1) * pageSize;
  filter['order'] = order;
  if (timezone) {
    filter['timezone'] = timezone;
  }
  if (include) {
    filter['include'] = include;
  }
  if (where) {
    filter.where = {};
    switch (tableName) {
      case SHIFT_LIST:
        return integrationShiftList(filter, where);

      case TASK:
        return integrationTask(filter, where);

      case PICKUP_REQUEST:
        return integrationPickupRequest(filter, where)

      case RIDER:
        return integrationRider(filter, where);

      case OPERATION:
        return integrationOperator(filter, where);

      case SCAN_HISTORY:
        return integrationScanHistory(filter, where);

      case DELIVERY_ORDERS:
        return integrationDeliveryOrders(filter, where);

      default:
        return filter;
    }

  }


  return filter
}


const integrationOperator = (filter, where) => {
  for (const key in where) {

    if (where[key]) {

      if (where['username']) {
        filter.where = {
          $or: {
            username: { $like: `%${where['username']}%` },
            email: { $like: `%${where['username']}%` }
          }
        }
      }

      if (key !== 'username') {
        filter.where[key] = where[key];
      }
    }
  }

  return filter;
}

const integrationScanHistory = (filter, where) => {
  for (const key in where) {
    if (where[key]) {

      if (where['barcode']) {
        filter.where.barcode = {
          $like: `%${where['barcode']}%`
        }
      }

      if (key === 'endDate' || key === 'beginDate') {
        if (where['beginDate']) {
          filter.where['actionTime'] = {
            $gte: where['beginDate'],
          }
        }

        if (where['endDate']) {
          filter.where['actionTime'] = {
            $lte: where['endDate']
          }
        }

        if (where['beginDate'] && where['endDate']) {
          filter.where['actionTime'] = {
            $gte: where['beginDate'],
            $lte: where['endDate']
          }
        }
      }

      if (key !== 'barcode' && key !== 'endDate' && key !== 'beginDate') {
        filter.where[key] = where[key];
      }
    }
  }

  return filter;
}

const RIDER_STATE = ['ACTIVE', 'INACTIVE'];

const integrationRider = (filter, where) => {
  for (const key in where) {
    if (key === 'isSyncedTookan' && where['isSyncedTookan'] !== '') {
      filter.where.isSyncedTookan = where[key];
    }

    if (key === 'state' && RIDER_STATE.includes(where['state'])) {
      filter.where.state = where[key];
    }

    if (where[key]) {

      if (where['mobile']) {
        filter.where.mobile = {
          $like: `%${where['mobile']}%`
        }
      }

      if (key !== 'mobile' && key !== 'state') {
        filter.where[key] = where[key];
      }
    }
  }

  return filter;
}

const DATE_TYPE = ['created_at', 'startedAt', 'failedAt', 'successAt']


const integrationTask = (filter, where) => {
  for (const key in where) {

    if (!where['endDate']) {
      where['endDate'] = moment();
    }

    if (where[key]) {
      if (!where['dateType'] || !DATE_TYPE.includes(where['dateType'])) {
        where['dateType'] = 'created_at';
      }

      if (key === 'endDate' || key === 'beginDate') {
        if (where['beginDate']) {
          filter.where[where['dateType']] = {
            $gte: where['beginDate'],
          }
        }

        if (where['endDate']) {
          filter.where[where['dateType']] = {
            $lte: where['endDate']
          }
        }

        if (where['beginDate'] && where['endDate']) {
          filter.where[where['dateType']] = {
            $gte: where['beginDate'],
            $lte: where['endDate']
          }
        }
      }

      if (where['objectCode']) {
        filter.where.objectCode = {
          $like: `%${where['objectCode']}%`
        }
      }
      
      // if (key === 'order') {
      //   filter.
      // }

      if (key !== 'endDate' && key !== 'beginDate' && key !== 'objectCode' && key !== 'dateType') {
        filter.where[key] = where[key];
      }

    }
  }

  return filter;
}

const integrationPickupRequest = (filter, where) => {
  for (const key in where) {

    if (key === 'state') {
      filter.where[key] = where[key];
    }

    if (key === 'warehouseId') {
      filter.where[key] = where[key];
    }

    if (where['pickupContactPhone']) {
      filter.where.pickupContactPhone = {
        $like: `%${where['pickupContactPhone']}%`
      }
    }

    if (where['username']) {
      filter.where.username = {
        $like: `%${where['username']}%`
      }
    }

    if (where['barcode']) {
      filter.where.barcode = {
        $like: `%${where['barcode']}%`
      }
    }

    if (where['pickupFullAddress']) {
      filter.where.pickupFullAddress = {
        $ilike: `%${where['pickupFullAddress']}%`
      }
    }

  }

  return filter;
}

const integrationShiftList = (filter, where) => {
  for (const key in where) {
    if (where[key]) {

      if (key === 'endDate' || key === 'beginDate') {


        if (where['beginDate']) {
          filter.where.workingDate = {
            $gte: where['beginDate'],
          }
        }

        if (where['endDate']) {
          filter.where.workingDate = {
            $lte: where['endDate']
          }
        }

        if (where['beginDate'] && where['endDate']) {
          filter.where.workingDate = {
            $gte: where['beginDate'],
            $lte: where['endDate']
          }
        }
      }

      if (key !== 'endDate' && key !== 'beginDate') {
        filter.where[key] = where[key];
      }
    }
  }

  return filter;
}

const integrationDeliveryOrders = (filter, where) => {
  for (const key in where) {

    if (where[key]) {
      if (key !== 'barcode' && key !== 'deliverFullAddress' && key !== 'receiverContact' && key !== 'state' && key !== 'deliverTimes') {
        filter.where[key] = where[key];
      }

      if (key === 'state') {
        filter.where[key] = { $in: where['state'] };
      }

      if (key === 'barcode') {
        filter.where[key] = {
          $like: `%${where['barcode']}%`
        }
      }

      if (key === 'deliverFullAddress') {
        filter.where[key] = {
          $ilike: `%${where['deliverFullAddress']}%`
        }
      }

      if (key === 'receiverContact') {
        filter.where['$or'] = [
          { receiverName: { $ilike: `%${where[key]}%` } },
          { receiverPhone: { $like: `%${where[key]}%` } }
        ]
      }

      if (key === 'deliverTimes') {
        if (where[key] === '6') {
          filter.where[key] = {
            $gte: where[key]
          }
        } else {
          filter.where[key] = where[key]
        }
      }
    }
  }
  return filter;
}
