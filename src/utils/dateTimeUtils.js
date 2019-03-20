export const sortDecsByField = (data, field) => {
  data.sort((a, b) => {
    const date1 = new Date(a[field]);
    const date2 = new Date(b[field]);
    if (date1 > date2) return -1;
    if (date1 < date2) return 1;
    return 0
  })
  return data;
}

export const getLocalTime = () => {
  return new Date().getTimezoneOffset();
}

export const addDays = (date, distance) => {
  if (!date) return null;
  date = new Date(date);
  let offsetDate = date.setDate(date.getDate() + Number(distance));
  return new Date(offsetDate);
}

export const formatLocalTimeToUtc = (date) => {
  let utclocalTime = new Date(date).getTime() + new Date().getTimezoneOffset() * 1000 * 60;
  return new Date(utclocalTime);
}

//Handle datefilter delivery orders
const daysInMonth = (month, year) => {
	return new Date(year, month, 0).getDate();
};
const formatMonth = (month) => {
	return month < 10 ? `0${month}` : month
};

const handleToDay = () => {
	let date = new Date();
	return {
		createdAt1: `${date.getFullYear()}-${formatMonth(date.getMonth() + 1)}-${date.getDate()} 00:00:00`,
		createdAt2: `${date.getFullYear()}-${formatMonth(date.getMonth() + 1)}-${date.getDate()} 23:59:59`
	}
};

const handleYesterDay = () => {
	let date = new Date();
	return {
		createdAt1: `${date.getFullYear()}-${formatMonth(date.getMonth() + 1)}-${date.getDate() - 1} 00:00:00`,
		createdAt2: `${date.getFullYear()}-${formatMonth(date.getMonth() + 1)}-${date.getDate() - 1} 23:59:59`
	}
};
const handleThisMonth = () => {
	let date = new Date();
	return {
		createdAt1: `${date.getFullYear()}-${formatMonth(date.getMonth() + 1)}-01 00:00:00`,
		createdAt2: `${date.getFullYear()}-${formatMonth(date.getMonth() + 1)}-${daysInMonth(date.getMonth() + 1, date.getFullYear())} 23:59:59`
	}
};
const handleThreeMonth = () => {
	let date = new Date();
	let startMonth=null;
	let startYear=null;
	if(date.getMonth() === 0){
		startMonth=11;
		startYear = date.getFullYear()-1;
	}else if(date.getMonth()===1){
		startMonth = 12;
		startYear = date.getFullYear()-1;
	} else {
		startMonth=formatMonth(date.getMonth() - 1);
		startYear = date.getFullYear();
		
	}
	return {
		createdAt1: `${startYear}-${startMonth}-01 00:00:00`,
		createdAt2: `${date.getFullYear()}-${formatMonth(date.getMonth() + 1)}-${daysInMonth(date.getMonth() + 1, date.getFullYear())} 23:59:59`
	}
};
export const handleDate = (filter) => {
	switch (filter) {
		case null: {
			return {
				createdAt1: null,
				createdAt2: null
			}
		}
		case 'today': {
			return handleToDay();
		}
		case 'yesterday': {
			return handleYesterDay();
		}
		case 'thismonth': {
			return handleThisMonth();
		}
		case 'threemonth': {
			return handleThreeMonth();
		}
		default:
			return {
				createdAt1: null,
				createdAt2: null
			}
	}
};
