// for use on server to guarantee data was fetched before rendering pages for user
export default function fetchComponentData(dispatch, components, {params, location}) {
  const prefetchData = []
  components.forEach(component => {
    if (component.hasOwnProperty('prefetchData')) {
      prefetchData.push(component.prefetchData)
    }
  })

  const promises = prefetchData.map(need => dispatch(need({location, params})));

  return Promise.all(promises);
}

  // for client side use, let each component trigger it's fetching data logics
  // might as well to add in dupe check to avoid fetching when data is already there
export function fetchNeeds(prefetchData, props) {
  const { params, dispatch } = props;
  prefetchData.map(need => dispatch(need(params)))
}
