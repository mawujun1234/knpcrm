package com.mawujun.constant;

/**
 * 状态
 * @author mawujun
 *
 */
public enum Status {
	enable("可用"),disable("失效");
	
	private String name;
	
	Status(String name){
		this.name=name;
	}

	public String getName() {
		return name;
	}


}
