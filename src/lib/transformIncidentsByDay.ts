import data from '../data/incidents_by_day.json';
import { uniq } from 'lodash';

const defaultDays = 30;

export const days = (days: number = defaultDays) => data.slice(Math.max(data.length - days, 0)).map(item => item.day);

export const uniqueCategories = uniq(
  data.flatMap(item =>
    item.incidents.categories.map((category: Record<string, any>) =>
      category.type
    )
  )
).sort();

export const incidentsByDay = (days: number = defaultDays) => {
  return uniqueCategories.map(category => 
    data.slice(Math.max(data.length - days, 0)).map(item => ({
      x: item.day,
      y: item.incidents.categories
        .find(_category => _category.type === category)
          ?.percentage
    }))
  )
};

export const legend = uniqueCategories.map(category => ({
  name: category
}));