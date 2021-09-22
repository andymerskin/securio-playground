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

export const selectCategories = uniqueCategories.map(category => {
  return {
    value: category,
    title: category,
  };
});

export const incidentsCount = (
  days: number = defaultDays,
) => {
  return data.slice(Math.max(data.length - days, 0)).reduce((prev, next) => prev + next.incidents.count, 0);
};

export const incidentsByDay = (
  days: number = defaultDays,
  categoryFilter: Array<string> = uniqueCategories
) => {
  return uniqueCategories
    .filter(category => categoryFilter.includes(category))
    .map(category => {
      return data.slice(Math.max(data.length - days, 0)).map(item => {
        const yValue = item.incidents.categories
          .find(_category => _category.type === category)
            ?.percentage;
        return {
          x: item.day,
          y: Math.ceil((yValue || 0) / 100 * item.incidents.count),
          category,
        }
      })
    })
};

export const legend = uniqueCategories.map(category => ({
  name: category
}));