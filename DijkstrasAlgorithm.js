class City {
    constructor(name, routes={}) {
        this.name = name
        this.routeNodes = routes
        this.routePrices = {}
    }

    add_route(city, price) {
        this.routePrices[city.name] = price
        this.routeNodes[city.name] = city
    }
}

function dijkstras_algorithm(startingCity, finalDestination) {
    let cheapest_prices_table = {}
    let cheapest_previous_stopover_city_table = {}

    let unvisited_cities = []

    let visited_cities = {}

    cheapest_prices_table[startingCity.name] = 0

    let current_city = startingCity

    while (current_city) {
        visited_cities[current_city.name] = true
        unvisited_cities = unvisited_cities.filter(city => city.name !== current_city.name)

        for (const [adjacentCity, price] of Object.entries(current_city.routePrices)) {
            if (visited_cities[adjacentCity] == undefined) {
                unvisited_cities.push(current_city.routeNodes[adjacentCity])
            }

            let price_through_current_city = cheapest_prices_table[current_city.name] + price

            if (!cheapest_prices_table[adjacentCity] || price_through_current_city < cheapest_prices_table[adjacentCity]) {
                cheapest_prices_table[adjacentCity] = price_through_current_city
                cheapest_previous_stopover_city_table[adjacentCity] = current_city.name
            }
        }

        let lowestPrice = 99999;
        let lowestCity = '';
        unvisited_cities.forEach(city => {
            if(lowestPrice > cheapest_prices_table[city.name])
            {
                lowestPrice = cheapest_prices_table[city.name];
                lowestCity = city.name;
            }
        })
        current_city = current_city.routeNodes[lowestCity];
    }

    let shortest_path = []

    let current_city_name = finalDestination.name

    while (current_city_name !== startingCity.name) {
        shortest_path.push(current_city_name);

        current_city_name = cheapest_previous_stopover_city_table[current_city_name]

        
    }

    shortest_path.push(startingCity.name)

    return shortest_path.reverse()

}


let atlanta = new City("Atlanta")
let boston = new City("Boston")
let chicago = new City("Chicago")
let denver = new City("Denver")
let el_paso = new City("El Paso")
atlanta.add_route(boston, 100)
atlanta.add_route(denver, 160)
boston.add_route(chicago, 120)
boston.add_route(denver, 180)
chicago.add_route(el_paso, 80)
denver.add_route(chicago, 40)
denver.add_route(el_paso, 140)

console.log(dijkstras_algorithm(atlanta, el_paso))
