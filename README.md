# What you need

- [SHACL-X](https://github.com/SHACL-X/shacl-x) (pick the latest version)
- Web server that exposes the [JS library](https://github.com/ashleycaselli/ajay-shacl-x-example/blob/master/Constraint_Checking_Function.js)
    - Local: in [`shapes.ttl`](https://github.com/ashleycaselli/ajay-shacl-x-example/blob/master/data/shapes.ttl) uncomment [line 30](https://github.com/ashleycaselli/ajay-shacl-x-example/blob/master/data/shapes.ttl#L30) and comment [line 33](shacl-x-example/blob/master/data/shapes.ttl#L33) (check that the exposed port is the right one)   
    - Docker
        1. create a docker network (in this case is called `shacl-x`)
            ```
            docker network create shacl-x
            ```
        1. run a web server
            ```
            docker run --rm \
            --network=shacl-x \
            -v ${PWD}:/usr/share/nginx/html \
            -p 8080:80 \
            --name shacl-x-web \
            ghcr.io/shacl-x/examples:latest
            ```
        2. run
            ```
            docker run --rm \
            --network=shacl-x \
            -v ${PWD}/data:/data \
            ghcr.io/shacl-x/shacl-x validate \
            -datafile /data/data.ttl \
            -shapesfile /data/shapes.ttl
            ```

# Validation Report
```
@prefix owl:   <http://www.w3.org/2002/07/owl#> .
@prefix bot:   <https://w3id.org/bot#> .
@prefix ifc:   <https://standards.buildingsmart.org/IFC/DEV/IFC2X3/TC1/OWL> .
@prefix xsd:   <http://www.w3.org/2001/XMLSchema#> .
@prefix rdfs:  <http://www.w3.org/2000/01/rdf-schema#> .
@prefix geom:  <http://rdf.bg/geometry.ttl#> .
@prefix geo:   <http://www.opengis.net/ont/geosparql#> .
@prefix CSRO:  <http://www.semanticweb.org/aagr657/ontologies/2023/9/CraneSpaceRepresentationOntology#> .
@prefix sf:    <http://www.opengis.net/ont/sf#> .
@prefix smls:  <https://w3id.org/def/smls-owl#> .
@prefix rdf:   <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix sh:    <http://www.w3.org/ns/shacl#> .
@prefix inst:  <https://www.ugent.be/myAwesomeFirstBIMProject#> .
@prefix LinkOnt: <http://purl.org/ConstructLinkOnt/LinkOnt#> .

[ a            sh:ValidationReport ;
  sh:conforms  false ;
  sh:result    [ a                             sh:ValidationResult ;
                 sh:focusNode                  inst:IfcTask_Test ;
                 sh:resultMessage              "Space constraint is violated for focus node: inst:IfcTask_Test" ;
                 sh:resultSeverity             sh:Violation ;
                 sh:sourceConstraint           []  ;
                 sh:sourceConstraintComponent  sh:SPARQLConstraintComponent ;
                 sh:sourceShape                inst:boundingBoxIntersectionDetection ;
                 sh:value                      inst:IfcTask_Test
               ]
] .
```