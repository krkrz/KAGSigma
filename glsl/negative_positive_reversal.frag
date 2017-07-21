precision mediump float;
varying vec2 v_texCoord;
uniform sampler2D s_tex0;
void main()
{
	vec4 color = texture2D( s_tex0, v_texCoord );
	gl_FragColor =  vec4( 1.0 - color.r, 1.0 - color.g, 1.0 - color.b, color.a );
}
