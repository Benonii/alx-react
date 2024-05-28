import { Map, List } from 'immutable';

export function concatElements(page1, page2) {
  return List(page1).concat(page2);
}

export function mergeElements(page1, page2) {
  const map1 = Map(page1);
  const map2 = Map(page2);
  return List((map1.merge(map2)).values());
}
