precision mediump float;
varying vec2 v_texCoord;
uniform sampler2D s_tex0;
void main()
{
	gl_FragColor = texture2D( s_tex0, v_texCoord );
}
