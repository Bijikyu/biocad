
import { Rect } from "jfw/geom";
import Depiction, { Opacity } from "biocad/cad/Depiction";
import { SBOLXGraph, SXComponent, SXSubComponent } from "sbolgraph";
import Layout from "biocad/cad/Layout";
import DOp, { DOpResult } from "./DOp";
import ComponentDepiction from "../ComponentDepiction";

// Allows roots to be moved around
// Put this later in the list so moving into parents etc takes priority

// This DOp modifies the layout in place
// so maybe shouldn't be a DOp at all

export default class DOpMoveInWorkspace extends DOp {

    test(
        sourceLayout:Layout, sourceGraph:SBOLXGraph,
        targetLayout:Layout, targetGraph:SBOLXGraph,
        sourceDepiction:Depiction,
        targetBBox:Rect,
        ignoreURIs:string[]):DOpResult|null {

            if(sourceLayout !== targetLayout)
                return null

            if(sourceGraph !== targetGraph)
                return null
            
            if(sourceDepiction.parent)
                return null // I only allow dragging roots

            sourceDepiction.absoluteOffset = targetBBox.topLeft

            return {}

        }

}



