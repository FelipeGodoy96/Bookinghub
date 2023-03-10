package br.com.APIrest.APIrest.dto;

import br.com.APIrest.APIrest.model.Reservas;

import java.io.Serializable;
import java.sql.Date;
import java.sql.Time;

public class ReservasDto_Id implements Serializable {
    public static final long serialVersionUID = 1L;

    private Integer id;
//    private Time h_inic_reser;
//    private Date d_inic_reser;
//    private Date d_fin_reser;

    public ReservasDto_Id() {
    }

    public ReservasDto_Id(Integer id, Time h_inic_reser, Date d_inic_reser, Date d_fin_reser) {
        this.id = id;
//        this.h_inic_reser = h_inic_reser;
//        this.d_inic_reser = d_inic_reser;
//        this.d_fin_reser = d_fin_reser;
    }

    public ReservasDto_Id(Reservas reservas) {
        id = reservas.getId();
//        h_inic_reser = reservas.getH_inic_reser();
//        d_inic_reser = reservas.getD_inic_reser();
//        d_fin_reser = reservas.getD_fin_reser();
    }

    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }

//    public Time getH_inic_reser() {
//        return h_inic_reser;
//    }
//    public void setH_inic_reser(Time h_inic_reser) {
//        this.h_inic_reser = h_inic_reser;
//    }
//
//    public Date getD_inic_reser() {
//        return d_inic_reser;
//    }
//    public void setD_inic_reser(Date d_inic_reser) {
//        this.d_inic_reser = d_inic_reser;
//    }
//
//    public Date getD_fin_reser() {
//        return d_fin_reser;
//    }
//    public void setD_fin_reser(Date d_fin_reser) {
//        this.d_fin_reser = d_fin_reser;
//    }
}
