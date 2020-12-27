package uz.kitc.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.time.LocalDate;

import uz.kitc.domain.enumeration.GroupStatus;

/**
 * A CourseGroup.
 */
@Entity
@Table(name = "course_group")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class CourseGroup implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "start_date")
    private LocalDate startDate;

    @Enumerated(EnumType.STRING)
    @Column(name = "status")
    private GroupStatus status;

    @ManyToOne
    @JsonIgnoreProperties(value = "courseGroups", allowSetters = true)
    private Teacher teacher;

    @ManyToOne
    @JsonIgnoreProperties(value = "courseGroups", allowSetters = true)
    private Planning teacher;

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public CourseGroup name(String name) {
        this.name = name;
        return this;
    }

    public void setName(String name) {
        this.name = name;
    }

    public LocalDate getStartDate() {
        return startDate;
    }

    public CourseGroup startDate(LocalDate startDate) {
        this.startDate = startDate;
        return this;
    }

    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }

    public GroupStatus getStatus() {
        return status;
    }

    public CourseGroup status(GroupStatus status) {
        this.status = status;
        return this;
    }

    public void setStatus(GroupStatus status) {
        this.status = status;
    }

    public Teacher getTeacher() {
        return teacher;
    }

    public CourseGroup teacher(Teacher teacher) {
        this.teacher = teacher;
        return this;
    }

    public void setTeacher(Teacher teacher) {
        this.teacher = teacher;
    }

    public Planning getTeacher() {
        return teacher;
    }

    public CourseGroup teacher(Planning planning) {
        this.teacher = planning;
        return this;
    }

    public void setTeacher(Planning planning) {
        this.teacher = planning;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof CourseGroup)) {
            return false;
        }
        return id != null && id.equals(((CourseGroup) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "CourseGroup{" +
            "id=" + getId() +
            ", name='" + getName() + "'" +
            ", startDate='" + getStartDate() + "'" +
            ", status='" + getStatus() + "'" +
            "}";
    }
}
