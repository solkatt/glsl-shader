#ifdef GL_ES
precision mediump float;
#endif


uniform vec1 u_resolution;


void main(){
    vec3 color = vec3(0.3, 0.5, 0.3);
    gl_FragColor = vec4(color, 1.0);
    
}

