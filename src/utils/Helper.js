const cheerio = require("cheerio");

export const checkSvg = (component) => {
 const $ = getHtml(component, 'svg');
 const svgHeight = $('svg').attr('height');
 const svgWidth = $('svg').attr('width');
 return svgHeight == "200" && svgWidth == "300";
}

export const getHtml = (component, tag) => {
 const cheerioData = cheerio.load(component.find(tag).html());
 return cheerioData;
}