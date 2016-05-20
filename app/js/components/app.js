/**
 * Created by siddharthsharma on 5/21/16.
 */

var React = require('react');
var Contact = require('./contact/app-catalog');
var Cart = require('./cart/app-cart');
var Router = require('react-router-component');
var CatalogDetail = require('./product/app-catalogdetail');
var Template = require('./app-template.js');
var Locations = Router.Locations;
var Location  = Router.Location;

var App = React.createClass({
    render:function(){
        return (
            <Template>
            <Locations>
            <Location path="/" handler={Catalog} />
            <Location path="/cart" handler={Cart} />
            <Location path="/item/:item" handler={CatalogDetail} />
            </Locations>
            </Template>
        );
    }
});

module.exports = App;
