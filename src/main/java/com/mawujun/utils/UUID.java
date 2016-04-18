package com.mawujun.utils;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;

import org.hibernate.annotations.GenericGenerator;

import com.mawujun.generator.model.FieldDefine;

public class UUID {
	@GeneratedValue(generator = "uuid")
	@GenericGenerator(
	        name = "uuid",
	        strategy = "org.hibernate.id.UUIDGenerator"
	    )
	@FieldDefine(title="id",hidden=true)
	@Column(length=36)
	private String id;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}
}
