
import LabelDepiction from 'biocad/cad/LabelDepiction';

import Depiction, { Opacity, Orientation, Fade }  from './Depiction'

import { VNode, svg } from 'jfw/vdom'

import { Matrix, Vec2 } from 'jfw/geom'

import {
    SXIdentified,
    SXComponent,
    SXSubComponent
} from "sbolgraph"

import { Types } from 'bioterms'

import Layout from './Layout'

import visbolite from 'visbolite'

import parts, { shortNameFromTerm } from 'data/parts'

import RenderContext from './RenderContext'
import { SXRange, Watcher } from "sbolgraph";

import extend = require('xtend')
import IdentifiedChain from '../IdentifiedChain';

export default class BackboneDepiction extends Depiction {

    orientation: Orientation
    location: SXIdentified|null
    backboneY:number

    constructor(layout:Layout, parent?:Depiction, uid?:number) {

        super(layout, undefined, undefined, parent, uid)

        this.orientation = Orientation.Forward
    }

    render(renderContext:RenderContext):VNode {

        const offset = this.absoluteOffset.multiply(renderContext.layout.gridSize)
        const size = this.size.multiply(renderContext.layout.gridSize)

        //const anchorY = this.anchorY * circuitView.gridSize
        //offset -= Vec2.fromXY(offset.x, offset.y - anchorY)


        const anchorY = this.getAnchorY() * renderContext.layout.gridSize.y


        const transform = Matrix.translation(offset)


        var svgAttr = {}

        if(this.fade === Fade.Full) {
            svgAttr['opacity'] = '0.2'
        } else if(this.fade === Fade.Partial) {
            svgAttr['opacity'] = '0.5'
        }

        return svg('g', extend(svgAttr, {
            transform: transform.toSVGString()
        }), [
            /*svg('rect', {
                fill: 'rgba(255, 0, 0, 0.3)',
                width: size.x,
                height: size.y
            }),*/
            svg('line', {
                x1: 0,
                y1: anchorY,
                x2: size.x,
                y2: anchorY,
                stroke: 'black',
                'stroke-width': '2px'
            })
        ])


    }

    isSelectable():boolean {

        return false

    }






    get label():LabelDepiction|undefined {

        return undefined

    }


    renderThumb(size:Vec2):VNode {

        return svg('g', [
        ])
    }

    getAnchorY():number {
        return this.backboneY
    }

}


